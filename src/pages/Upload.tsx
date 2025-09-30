import React, { useState, useRef } from "react";
import {
  Upload,
  FileVideo,
  Shield,
  AlertTriangle,
  CheckCircle,
  X,
  FileText,
  HardDrive,
} from "lucide-react";
import { jsPDF } from "jspdf";

const UploadWorkout: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{
    [key: string]: number;
  }>({});
  const [workoutInfo, setWorkoutInfo] = useState({
    athleteName: "",
    sportType: "football",
    description: "",
    role: "athlete",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles]);

    // Fake upload progress
    newFiles.forEach((file) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
        }
        setUploadProgress((prev) => ({
          ...prev,
          [file.name]: progress,
        }));
      }, 200);
    });
  };

  const removeFile = (fileName: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[fileName];
      return newProgress;
    });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert('Workout video uploaded successfully! Review will start soon.');
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare FormData to send the workout information and video files
    const formData = new FormData();

    // Append workout information
    formData.append("athlete_name", workoutInfo.athleteName);
    formData.append("sport_type", workoutInfo.sportType);
    formData.append("description", workoutInfo.description);
    formData.append("role", workoutInfo.role);

    // Append the video files to FormData
    files.forEach((file) => {
      formData.append("videos", file);
    });

    try {
      // Send the data to the backend (adjust the URL accordingly)
      const response = await fetch("http://127.0.0.1:8000/workouts/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        // Handle success (e.g., show success message, redirect, etc.)
        alert(
          `Workout video uploaded successfully! Workout ID: ${data.workout_id}`
        );
        // const videoUrls: string[] = data.videos || [];
        generatePDF(workoutInfo, files, data.workout_id);
        setFiles([]); // Clear the files after successful upload
        setUploadProgress({}); // Reset upload progress
        setWorkoutInfo({
          athleteName: "",
          sportType: "football",
          description: "",
          role: "athlete",
        }); // Reset form fields
      } else {
        const errorData = await response.json();
        // Handle error (e.g., show error message)
        alert(
          `Error uploading workout: ${errorData.detail || "Unknown error"}`
        );
      }
    } catch (error) {
      // Handle network or unexpected errors
      console.error("Error during submission:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const generatePDF = (workoutInfo: any, files: File[], workoutId: string) => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Workout Upload Information", 20, 20);

    // Workout Details
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Athlete Name: ${workoutInfo.athleteName}`, 20, 30);
    doc.text(`Sport Type: ${workoutInfo.sportType}`, 20, 40);
    doc.text(`Role: ${workoutInfo.role}`, 20, 50);
    doc.text(`Description: ${workoutInfo.description}`, 20, 60);

    // Add Workout ID
    doc.text(`Workout ID: ${workoutId}`, 20, 70);

    // Video Files List
    doc.text("Uploaded Video Files:", 20, 80);
    files.forEach((file, index) => {
      doc.text(
        `${index + 1}. ${file.name} (${formatFileSize(file.size)})`,
        20,
        90 + index * 10
      );
      // Add Video URLs
      doc.text(`Video URL: http://127.0.0.1:8000/media/workout_videos/${file.name}`, 20, 100 + index*10);
    });

    // Save the PDF
    doc.save(`Workout_Upload_${workoutId}.pdf`);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🎥{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Upload Workout
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Upload your workout or training videos for AI-powered performance
            analysis and coaching feedback.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full mt-6"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Workout Information */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <FileText className="h-6 w-6 text-green-400" />
              <span>Workout Information</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="athleteName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Athlete Name *
                </label>
                <input
                  type="text"
                  id="athleteName"
                  value={workoutInfo.athleteName}
                  onChange={(e) =>
                    setWorkoutInfo((prev) => ({
                      ...prev,
                      athleteName: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="sportType"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Sport Type *
                </label>
                <select
                  id="sportType"
                  value={workoutInfo.sportType}
                  onChange={(e) =>
                    setWorkoutInfo((prev) => ({
                      ...prev,
                      sportType: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                >
                  <option value="football">Football</option>
                  <option value="cricket">Cricket</option>
                  <option value="basketball">Basketball</option>
                  <option value="athletics">Athletics</option>
                  <option value="tennis">Tennis</option>
                  <option value="swimming">Swimming</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Video Description
              </label>
              <textarea
                id="description"
                value={workoutInfo.description}
                onChange={(e) =>
                  setWorkoutInfo((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                rows={4}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Brief description of the workout, drill, or training focus..."
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <HardDrive className="h-6 w-6 text-cyan-400" />
              <span>Video Upload</span>
            </h2>

            {/* Security Notice */}
            <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-green-200">
                  <strong>Fair Play:</strong> All videos are secured and
                  verified for authenticity. Coaches and athletes can trust the
                  evaluation process.
                </div>
              </div>
            </div>

            {/* Drop Zone */}
            <div
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
                dragActive
                  ? "border-green-400 bg-green-400/10"
                  : "border-slate-600 hover:border-slate-500"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Drop workout/training videos here or click to browse
              </h3>
              <p className="text-gray-400 mb-4">
                Supported formats: .mp4, .mov, .avi, .mkv
              </p>
              <p className="text-gray-500 text-sm mb-6">
                Maximum file size: 2GB per file
              </p>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleChange}
                accept="video/*"
                className="hidden"
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Select Videos
              </button>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Uploaded Videos ({files.length})
                </h3>
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="bg-slate-700/50 border border-slate-600 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <FileVideo className="h-5 w-5 text-cyan-400" />
                          <span className="text-white font-medium">
                            {file.name}
                          </span>
                          <span className="text-gray-400 text-sm">
                            ({formatFileSize(file.size)})
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(file.name)}
                          className="text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>

                      {/* Progress Bar */}
                      {uploadProgress[file.name] !== undefined && (
                        <div className="mb-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">
                              {uploadProgress[file.name] === 100
                                ? "Uploaded"
                                : "Uploading..."}
                            </span>
                            <span className="text-gray-400">
                              {Math.round(uploadProgress[file.name])}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-600 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-300 ${
                                uploadProgress[file.name] === 100
                                  ? "bg-green-500"
                                  : "bg-gradient-to-r from-green-500 to-cyan-500"
                              }`}
                              style={{ width: `${uploadProgress[file.name]}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {uploadProgress[file.name] === 100 && (
                        <div className="flex items-center space-x-2 text-green-400 text-sm">
                          <CheckCircle className="h-4 w-4" />
                          <span>Video verified and ready for analysis</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-yellow-200">
                  <strong>Fair Usage:</strong> By uploading, you confirm the
                  video is authentic, belongs to you, and complies with fair
                  play and training guidelines.
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={
                files.length === 0 ||
                !workoutInfo.athleteName ||
                !workoutInfo.sportType
              }
              className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-3 mx-auto"
            >
              <Upload className="h-6 w-6" />
              <span>Start Analysis</span>
            </button>

            <p className="text-gray-400 text-sm mt-4">
              Analysis begins automatically after upload is complete ✅
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadWorkout;

// Importing React and useState from React library
"use client";
import React, { useState } from "react";

// Importing the styled container component
import StyledContainer from "./StyledContainer";

// Defining RecordingView component
const RecordingView: React.FC = () => {
    

// Declaring state variables using useState hook
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [recordingComplete, setIsRecordingComplete] = useState<boolean>(false);
    const [transcript, setTranscript] = useState<string>("");

    // Function to start recording
    const startRecording = () => {
        setIsRecording(true);
        setTranscript("some words");
    }

    // Function to stop recording
    const stopRecording = () => {
        setIsRecording(false);
    }

    // Function to toggle recording
    const handleToggleRecording = () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    }

    // Rendering JSX
    return (
        
            <StyledContainer>
                {/* Glass effect container */}
                <div className="bg-white items-center ml-auto pt-10 pb-10  mr-auto h-1/2 w-1/2 bg-opacity-20 rounded-md shadow-lg backdrop-filter backdrop-blur-lg ">
                    {/* Transcript Section */}
                    {(!isRecording || transcript) && (
                        <div className="w-1/4 m-auto rounded-md border p-4 bg-white animate-pulse">
                            <div className="flex-1 flex w-full justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {recordingComplete ? "Recorded" : "Recording"}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        {recordingComplete ? "Thank you, your recording has been saved." : "Hit record"}
                                    </p>
                                </div>
                                {isRecording && (
                                    <div className="rounded-full w-4 h-4 bg-red-500 animate-pulse"></div>
                                )}
                            </div>
                            {transcript && (
                                <div className="border rounded-md p-2 mt-4">
                                    <p className="mb-0">{transcript}</p>
                                </div>
                            )}
                        </div>
                    )}
    
                    {/* Buttons */}
                    <div className="flex items-center justify-center mt-6">
                        <button className={`py-2 px-4 rounded-lg transition duration-300 ease-in-out ${
                            isRecording ? "bg-purple-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
                        } text-white font-semibold`} onClick={handleToggleRecording}>
                            {isRecording ? "Stop Recording" : "Start Recording"}
                        </button>
                    </div>
                </div>
            </StyledContainer>
        );
    }
    
    export default RecordingView;
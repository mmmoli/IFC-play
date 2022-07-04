import React from "react";
import { useDropzone, DropzoneOptions } from "react-dropzone";

export type DropzoneProps = {
  options?: DropzoneOptions;
};

export const Dropzone: React.FC<DropzoneProps> = ({ options = {} }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone(options);

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default Dropzone;

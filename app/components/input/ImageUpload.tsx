'use client'

import { CldUploadWidget } from 'next-cloudinary';
import React, { useState } from 'react';
import Image from 'next/image';
import { TbPhotoPlus } from 'react-icons/tb';
declare global {
  var cloudinary: any;
}
interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload:React.FC<ImageUploadProps> = ({
  onChange,
  value,
  
}) => {
  const [resource, setResource] = useState<any>(null); // State to hold the uploaded image data
  console.log(value)
  
  return (
    <div>
    <CldUploadWidget
  uploadPreset="dzbm3p1y" // Replace with your Cloudinary upload preset
  onSuccess={(result) => {
    // Check if result.info is an object and has the secure_url property
    if (typeof result.info !== "string" && result?.info?.secure_url) {
      const uploadedImageUrl = result.info.secure_url;
      setResource(result.info); // Set the uploaded image info in the state
      onChange(uploadedImageUrl); // Pass the uploaded URL to the onChange handler
    } else {
      console.error("Upload result is missing info or secure_url");
    }
  }}
>
  {({ open }) => {
    return (
      <div
        className='
          relative
          cursor-pointer
          transition
          border-dashed
          border-2
          p-20
          border-neutral-300
          flex
          flex-col
          justify-center
          items-center
          gap-4
          text-neutral-600
          rounded-md
        '
      >
        <TbPhotoPlus size={50} onClick={() => open()} />
        <div className='font-semibold text-lg'>
          <button
            onClick={() => {
              setResource(null); // Clear the current resource if needed
              open(); // Open the Cloudinary upload widget
            }}
            className="font-semibold text-lg"
          >
            Click to Upload
          </button>
        </div>
        {resource && (
          <div className="absolute inset-0 w-full h-full">
            <Image
              alt="Uploaded Image"
              style={{ objectFit: 'cover' }}
              src={resource.secure_url}
              fill
              className='rounded-md'
            />
          </div>
        )}
      </div>
    );
  }}
</CldUploadWidget>


    </div>
  );
};
export default ImageUpload;
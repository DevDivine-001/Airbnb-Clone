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

  return (
    <div>
      <CldUploadWidget
        uploadPreset="dzbm3p1y" // Replace with your Cloudinary upload preset
        onSuccess={(result) => {
          // const uploadedImageUrl = resource
          setResource(result.info); // Set the uploaded image info in the state
          // onChange(uploadedImageUrl); 
        }}
        onQueuesEnd={(result, { widget }) => {
          widget.close();
          result
          // console.log(setResource)
          
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
               <TbPhotoPlus size={50}
               onClick={() => {
                 open()
               } 
              }
               />
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
                    // Use the secure_url from the uploaded image data
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
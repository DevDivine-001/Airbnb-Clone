"use client"

import React from 'react';
import { SafeUser } from '@/app/types/inex';

interface ListingInfoProps {
  user: string | SafeUser; // Type definition for user
  category: string;
  description: string;
  roomCount: number;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  category,
  description,
  roomCount,
}) => {
  return (
    <div>
        ListingInfo
      {/* <p>User: {user.name}</p>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <p>Room Count: {roomCount}</p> */}
    </div>
  );
};

export default ListingInfo;

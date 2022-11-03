import { InfinitySpin } from 'react-loader-spinner';
import React from 'react';

export default function Loader() {
  return (
    <div className="Loader">
      <InfinitySpin width="200" color="#4cc6f5" />
    </div>
  );
}

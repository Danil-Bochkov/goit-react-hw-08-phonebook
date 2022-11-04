import { InfinitySpin } from 'react-loader-spinner';
import React from 'react';
import style from './Loader.module.css';

export default function Loader() {
  return (
    <div className={style.Loader}>
      <InfinitySpin width="200" color="#4cc6f5" />
    </div>
  );
}

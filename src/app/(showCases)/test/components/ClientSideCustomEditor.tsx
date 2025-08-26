'use client';
import dynamic from 'next/dynamic';

const ClientSideCustomEditor = dynamic(() => import('./CustomEditor'), {
  ssr: false,
});

export default ClientSideCustomEditor;

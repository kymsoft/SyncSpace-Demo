"use client"

import {ChevronLeft} from 'lucide-react';
import { useRouter } from 'next/navigation';
const BackButton = () => {
    const router = useRouter();
  return (
    <button>
        <ChevronLeft className='btn' onClick={() => router.back()} />
    </button>
  )
}

export default BackButton
'use client';
import { useRouter } from 'next/navigation';

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = () => {
    // Oturumu temizleme işlemi
    localStorage.clear(); // veya cookie temizliği
    router.push('/'); // anasayfaya yönlendir
  };

  return (
    <button onClick={handleSignOut} className="btn danger" style={{ marginTop: '1rem' }}>
      Oturumu Kapat
    </button>
  );
}

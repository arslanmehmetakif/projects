'use client';
import { useState } from 'react';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    departmentId: '',
    role: 'PATIENT',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (res.ok) {
      alert('Kayıt başarılı!');
    } else {
      alert(result.error || 'Kayıt başarısız');
    }
  };

  return (
    <>
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Adınız</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-posta</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Şifre</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="departmentId">Bölüm</label>
          <select id="departmentId" name="departmentId" value={formData.departmentId} onChange={handleChange} className="input">
            <option value="">Seçiniz</option>
            <option value="1">Beslenme ve Diyet</option>
            <option value="2">Çocuk Sağlığı ve Hastalıkları</option>
            <option value="3">Fizik Tedavi Polikliniği</option>
            <option value="4">Genel Cerrahi</option>
            <option value="5">Göz Hastalıkları</option>
            <option value="6">İç Hastalıkları</option>
            <option value="7">Kadın Doğum</option>
            <option value="8">Kanser Tarama</option>
            <option value="9">Pratisyen Hekim</option>
            <option value="10">Psikolog</option>
          </select>
        </div>
        <button type="submit" className="btn">Kayıt Ol</button>
      </form>
    </>
  );
}

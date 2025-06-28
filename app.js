// app/form/page.js
'use client';
import { useEffect, useState } from 'react';
import './form.css';

export default function FormPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/users');
      if (!res.ok) throw new Error('Sunucu hatası');
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error('Kullanıcılar alınamadı:', error);
    }
  };

  return (
    <div className="content-wrapper">
      <h1>Hastane Otomasyonuna Hoş Geldiniz</h1>
      <p>Bu sistem üzerinden randevu, mesajlaşma ve kullanıcı işlemlerini gerçekleştirebilirsiniz.</p>

      <h2>Kayıt Ol</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="register-name">Adınız</label>
          <input type="text" id="register-name" name="register-name" placeholder="Adınız" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="register-email">E-posta</label>
          <input type="email" id="register-email" name="register-email" placeholder="E-posta" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="register-password">Şifre</label>
          <input type="password" id="register-password" name="register-password" placeholder="Şifreniz" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="register-department">Bölüm Seçiniz</label>
          <select id="register-department" name="register-department" className="input">
            <option value="">Lütfen bir bölüm seçiniz</option>
            <option value="beslenme-diyet">Beslenme ve Diyet</option>
            <option value="cocuk-hastaliklari">Çocuk Sağlığı ve Hastalıkları</option>
            <option value="fizik-tedavi">Fizik Tedavi Polikliniği</option>
            <option value="genel-cerrahi">Genel Cerrahi</option>
            <option value="goz-hastaliklari">Göz Hastalıkları</option>
            <option value="ic-hastaliklari">İç Hastalıkları</option>
            <option value="kadin-dogum">Kadın Hastalıkları ve Doğum</option>
            <option value="kanser-tarama">Kanser Tarama</option>
            <option value="pratisyen-hekim">Pratisyen Hekim (Sağlık Raporu)</option>
            <option value="psikolog">Psikolog</option>
          </select>
        </div>
        <button type="submit" className="btn">Kayıt Ol</button>
      </form>

      <h2>Giriş Yap</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="login-email">E-posta</label>
          <input type="email" id="login-email" name="login-email" placeholder="E-posta" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Şifre</label>
          <input type="password" id="login-password" name="login-password" placeholder="Şifre" className="input" />
        </div>
        <button type="submit" className="btn success">Giriş Yap</button>
      </form>

      <h2>Profilim</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="profile-name">Ad Soyad</label>
          <input type="text" id="profile-name" name="profile-name" placeholder="Ad Soyad" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="profile-email">E-posta</label>
          <input type="email" id="profile-email" name="profile-email" placeholder="E-posta" className="input" readOnly />
        </div>
        <button type="submit" className="btn warning">Bilgileri Güncelle</button>
      </form>

      <h2>Admin Paneli</h2>
      <ul className="list-group">
        <li><a href="/admin/users">Kullanıcıları Yönet</a></li>
        <li><a href="/admin/appointments">Randevular</a></li>
        <li><a href="/admin/departments">Bölümler</a></li>
      </ul>

      <h2>Kayıtlı Kullanıcılar</h2>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.role}) - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

'use client'; // (Next 13+ App Router kullanıyorsan gerekli)
import React from 'react';

export default function HomePage() {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co/M5f05LsV/Kapak.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        color: '#000',
        padding: '50px 0',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: '30px',
          margin: 'auto',
          maxWidth: '900px',
          borderRadius: '10px',
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h1 style={{ color: '#0056b3' }}>Hastane Otomasyonuna Hoş Geldiniz</h1>
        <p>Bu sistem üzerinden randevu, mesajlaşma ve kullanıcı işlemlerini gerçekleştirebilirsiniz.</p>

        <h2 style={{ color: '#0056b3' }}>Kayıt Ol</h2>
        <form>
          <FormGroup label="Adınız" id="register-name" type="text" />
          <FormGroup label="E-posta" id="register-email" type="email" />
          <FormGroup label="Şifre" id="register-password" type="password" />

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="register-department" style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>
              Bölüm Seçiniz
            </label>
            <select id="register-department" name="register-department" style={inputStyle}>
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
          <SubmitButton title="Kayıt Ol" />
        </form>

        <h2 style={{ color: '#0056b3' }}>Giriş Yap</h2>
        <form>
          <FormGroup label="E-posta" id="login-email" type="email" />
          <FormGroup label="Şifre" id="login-password" type="password" />
          <SubmitButton title="Giriş Yap" />
        </form>

        <h2 style={{ color: '#0056b3' }}>Profilim</h2>
        <form>
          <FormGroup label="Ad Soyad" id="profile-name" type="text" />
          <FormGroup label="E-posta" id="profile-email" type="email" />
          <SubmitButton title="Bilgileri Güncelle" />
        </form>

        <h2 style={{ color: '#0056b3' }}>Admin Paneli</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="#" style={linkStyle}>Kullanıcıları Yönet</a></li>
          <li><a href="#" style={linkStyle}>Randevular</a></li>
          <li><a href="#" style={linkStyle}>Bölümler</a></li>
        </ul>
      </div>
    </div>
  );
}

// Bileşen: FormGroup
function FormGroup({ label, id, type }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label htmlFor={id} style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>{label}</label>
      <input id={id} name={id} type={type} placeholder={label} style={inputStyle} />
    </div>
  );
}

// Bileşen: Submit Button
function SubmitButton({ title }) {
  return (
    <button
      type="submit"
      style={{
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        width: '100%',
        marginBottom: '20px',
      }}
    >
      {title}
    </button>
  );
}

// Ortak stiller
const inputStyle = {
  width: 'calc(100% - 22px)',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  boxSizing: 'border-box',
};

const linkStyle = {
  display: 'block',
  padding: '10px 0',
  textDecoration: 'none',
  color: '#007bff',
  borderBottom: '1px solid #eee',
};
<div className="text-3xl font-bold text-blue-600">Tailwind Çalışıyor!</div>


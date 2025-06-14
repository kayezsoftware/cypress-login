import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);

  const emailRegex = /\S+@\S+\.\S+/;
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  const valid = emailRegex.test(email) && passRegex.test(password) && terms;

  return (
    <form onSubmit={e => { e.preventDefault(); nav('/success'); }}>
      <div>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {!emailRegex.test(email) && email && (
          <p>Geçerli e‑posta gir</p>
        )}
      </div>
      <div>
        <input
          placeholder="Şifre"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {!passRegex.test(password) && password && (
          <p>En az 8 karakter, rakam içerir</p>
        )}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={terms}
            onChange={e => setTerms(e.target.checked)}
          />
          Şartları kabul ediyorum
        </label>
      </div>
      <button type="submit" disabled={!valid}>Login</button>
    </form>
  );
}
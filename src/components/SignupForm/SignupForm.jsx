import { useState } from 'react';
import styles from './SignupForm.module.css';

export default function SignupForm() {
  const inputState = useState('');
  console.log(inputState);

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Пошта</span>
        <input
          type="email"
          name="email"
          //   onChange={this.handChange}
          //   value={this.state.email}
        />
      </label>
      <button type="submit">Зареєструватися</button>
    </form>
  );
}

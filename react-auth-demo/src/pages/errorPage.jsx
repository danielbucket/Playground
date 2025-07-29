import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  const { status, statusText, message, error: errorMessage } = error;
  

  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f8d7da',
      color: '#721c24',
      border: '1px solid #f5c6cb',
      borderRadius: '5px',
      maxWidth: '600px',
      margin: '50px auto'
    }}>
      <h1 style={{ color: 'red' }}>Oops!</h1>
      <p>Status: {status}</p>
      <p>{statusText}</p>
      <p>{message ? message : ''}</p>
      <div>{errorMessage ? errorMessage.toString() : ''}</div>
    </div>
  );
};
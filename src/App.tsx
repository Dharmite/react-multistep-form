import { useState } from "react";
import Address from "./components/Address"
import UserDetails from "./components/UserDetails"
import { useMultistepForm } from "./hooks/useMultistepForm"
import AccountSetup from "./components/AccountSetup";

export interface UserInfo {
  firstName: string;
  lastName: string;
  age: number;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
}

const App = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    age: 1,
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: ""
  });

  const updateUserInfo = (key: string, value: string | number) => {
    setUserInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const { currentStepIndex, next, prev, step, steps, isLastStep } = useMultistepForm([
    <UserDetails info={userInfo} update={updateUserInfo} />,
    <Address info={userInfo} update={updateUserInfo} />,
    <AccountSetup info={userInfo} update={updateUserInfo} />])


  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successful Account Creation")

  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      background: 'white',
      border: '1px solid black',
      padding: '2rem',
      borderRadius: '.5rem',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}>
        Step {currentStepIndex + 1} of {steps.length}
      </div>
      <form onSubmit={onsubmit}>
        {step}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '2rem',
        }}>
          <button type='button' onClick={prev} disabled={currentStepIndex === 0}>Back</button>
          <button type='submit'>{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>

    </div>
  )
}

export default App

import { UserInfo } from "../App"
import FormWrapper from "./FormWrapper"

const UserDetails = ({info, update}: {info: UserInfo, update: (key: string, value: string | number) => void}) => {
    const { firstName = '', lastName = '', age = 1 } = info;
    return (
        <FormWrapper title="User Details">
        <div>
            <label>
                First Name:
                <input type="text" name="firstName" value={firstName} onChange={(value) => update('firstName', value.target.value)}  required />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" name="lastName" value={lastName} onChange={(value) => update('lastName', value.target.value)} required />
            </label>
            <br />
            <label>
                Age:
                <input type="number" name="age" min="1" value={age} onChange={(value) => update('age', value.target.value)} required />
            </label>
        </div>
        </FormWrapper>
    )
}

export default UserDetails
import { UserInfo } from "../App"
import FormWrapper from "./FormWrapper"

const AccountSetup = ({info, update}: {info: UserInfo, update: (key: string, value: string | number) => void}) => {
    const { email = '', password = '' } = info;
    return (
        <FormWrapper title="Account Setup">
        <div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" value={email} onChange={(e) => update('email', e.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" name="password" value={password} onChange={(e) => update('password', e.target.value)} required />
                    </label>
                </div>
                <div>

                </div>
        </div>
        </FormWrapper>
    )
}

export default AccountSetup    

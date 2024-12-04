import { UserInfo } from "../App"
import FormWrapper from "./FormWrapper"

export const Address = ({info, update}: {info: UserInfo, update: (key: string, value: string | number) => void}) => {
  const { street = '', city = '', state = '', zip = '' } = info;
  return (
    <FormWrapper title="Address">
    <div>
        <div>
            <label>
                Street:
            </label>
            <input type="text" id="street" name="street" value={street} onChange={(e) => update('street', e.target.value)} required />
        </div>
        <div>
        <label>
                City:
            </label>
            <input type="text" id="city" name="city" value={city} onChange={(e) => update('city', e.target.value)} required />
        </div>
        <div>
        <label>
                State:
            </label>
            <input type="text" id="state" name="state" value={state} onChange={(e) => update('state', e.target.value)} required />
        </div>
        <div>
        <label>
                Zip:
            </label>
            <input type="text" id="zip" name="zip" value={zip} onChange={(e) => update('zip', e.target.value)}  required pattern="\d{5}" title="Please enter a valid 5-digit zip code" />
        </div>
    </div>
    </FormWrapper>
  )
}

export default Address

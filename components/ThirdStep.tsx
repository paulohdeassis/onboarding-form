import React, { ReactElement } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { userData } from './Form'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "./ui/select"

type thirdStepProps = userData & {
    updateFields: (fields: Partial<userData>) => void
  }
const ThirdStep = ({mgEmail, updateFields}: thirdStepProps) => {

    const selectOptions = ['Car Dealerships', 'Cosmetic Procedures', 'Dentists', 'Ecommerce', 'Insurance Brokers',
    'Plastic Surgeons', 'Real State Agents', 'Digital Marketing (Generic)'];
  return (
    <div>
        <h2>Professional Info</h2>
        <Label htmlFor="instagramUrl">
            Your Instagram  Account*
            <Input type='text' name='instagramUrl' placeholder='https://www.instagram.com/your_profile/' onChange={e => updateFields({ instagramUrl: e.target.value})} />
            <p>Make sure that we get the right profile</p>
        </Label>

        <Select>
            <SelectTrigger>
                <SelectValue placeholder='Select Your Niche' />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {selectOptions.map((option):ReactElement => {
                        return  <SelectItem value={option}>{option}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>

        <Label htmlFor='mgEmail'>
            User Name for your @mgmarketingagency.com email address 
            <Input type='text' name='mgEmail' placeholder='Example:  john.doe@mgmarketingagency.com' onChange={e => updateFields({ mgEmail: e.target.value})}/>
            <p>This is the User Name that you want for the email that we'll provide you</p>        
        </Label>
    </div>
  )
}

export default ThirdStep
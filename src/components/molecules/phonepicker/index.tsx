import React from "react";
import PhoneInput, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./CustomPhoneInput.css";

export interface phonepickedProp {
  value: Value; // Value is already `string | undefined`
  onChange: (data: Value) => void; // Ensure it accepts `string | undefined`
  placeholder?: string;
}
const PhonePicker: React.FC<phonepickedProp> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="h-[45px] flex items-centerblock w-full px-2 border border-gray-200  rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 sm:text-sm">
      <PhoneInput
        defaultCountry="NP"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        withCountryCallingCode
        international
        className=" w-full"
        
        // countryCallingCodeEditable={false}
      />
    </div>
  );
};

export default PhonePicker;

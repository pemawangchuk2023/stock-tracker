import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";

const InputField = ({
	name,
	label,
	placeholder,
	type = "text",
	register,
	disabled,
	value,
	error,
	validation,
}: FormInputProps) => {
	return (
		<div className='space-y-2'>
			<Label htmlFor={name} className='form-label'></Label>
			<Input
				type={type}
				id={name}
				placeholder={placeholder}
				disabled={disabled}
				value={value}
				className={cn("form-input", {
					"opacity-50 cursor-not-allowed": disabled,
				})}
				{...register(name, validation)}
			/>
			{error && <p className='text-sm text-red-500'>{error.message}</p>}
		</div>
	);
};

export default InputField;

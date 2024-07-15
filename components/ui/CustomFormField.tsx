'use client'
import React from 'react';
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from 'react-hook-form';
import { FormFieldTypes } from '../forms/PatientForm';

interface CustomPros {
    control: Control<any>,
    fieldType: FormFieldTypes,
    name: string,
    label: string,
    placeholder: string,
    iconSrc: string,
    iconAlt: string,
}

const CustomFormField = ({ control, fieldType, name, label, placeholder, iconSrc, iconAlt }: CustomPros) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='flex-1'>
                    {fieldType !== FormFieldTypes.CHECKBOX && label && (
                        <FormLabel>{label}</FormLabel>
                    )}

                    <FormControl>
                        <Input placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormDescription>
                        This is your public display name.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default CustomFormField;
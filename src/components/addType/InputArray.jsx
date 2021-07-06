import React from 'react'
import { useFieldArray } from 'react-hook-form'

const InputArray = ({ name, control, register }) => {

  const { fields, remove, append } = useFieldArray({
    control,
    name: name
  })

  return (
    <div>
      <ul>
        {fields.map((field, index) => {
          return (
            <li className="flex" key={field.id}>
              <input className="w-full" type="text" {...register(`${name}.${index}.name`)} />
              <button type="button" className="btn" onClick={() => remove(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <button className="btn" type="button" onClick={() => {
        append({ name: "" })
      }}>
        ADD
      </button>

    </div>
  )
}

export default InputArray

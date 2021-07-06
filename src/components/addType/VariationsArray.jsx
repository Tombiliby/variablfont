import React from 'react'
import { useFieldArray } from 'react-hook-form'

const VariationsArray = ({ name, control, register }) => {

  const { fields, remove, append } = useFieldArray({
    control,
    name: name,
  })

  return (
    <div>
      {fields.map((field, index) => {
        return (
          <div key={field.id} className="bg-green-50 flex items-center">
            <div>
              <div>
                <div className="font-bold">Name</div>
                <input className="w-full" type="text" {...register(`${name}.${index}.name`)} />
              </div>
              <div>
                <div className="font-bold">Default value maybe not</div>
                <input type="number" {...register(`${name}.${index}.defaultVal`, { valueAsNumber: true })} />
              </div>
              <div>
                <div className="font-bold">Min value</div>
                <input type="number" {...register(`${name}.${index}.minVal`, { valueAsNumber: true })} />
              </div>
              <div>
                <div className="font-bold">Max value</div>
                <input type="number" {...register(`${name}.${index}.maxVal`, { valueAsNumber: true })} />
              </div>
            </div>
            <div>
              <button type="button" className="btn" onClick={() => remove(index)}>Delete</button>
            </div>
          </div>
        );
      })}
      <button className="btn" type="button" onClick={() => {
        append({})
      }}>
        ADD
      </button>

    </div>
  )
}

export default VariationsArray




//const VariationsArray = ({ control, register }) => {
//
//  const name = "variations"
//  const { fields, remove, append } = useFieldArray({
//    control,
//    name: "name",
//    defaultVal: "defaultVal",
//    minVal: "minVal",
//    maxVal: "maxVal"
//  })
//
//  return (
//    <>
//      {fields.map((field, index) => {
//        return (
//          <div key={field.id} className="bg-green-50">
//            <div>
//              <div>Name</div>
//              <input type="text" {...register(`${name}.${index}.name`)} />
//            </div>
//            <div>
//              <div>Default value maybe not</div>
//              <input type="text" {...register(`${name}.${index}.defaultVal`)} />
//            </div>
//            <div>
//              <div>Min value</div>
//              <input type="text" {...register(`${name}.${index}.minVal`)} />
//            </div>
//            <div>
//              <div>Max value</div>
//              <input type="text" {...register(`${name}.${index}.maxVal`)} />
//            </div>
//            <button type="button" className="btn" onClick={() => remove(index)}>Delete</button>
//          </div>
//        );
//      })}
//      <button className="btn" type="button" onClick={() => {
//        append({
//          name: "name",
//          defaultVal: "defaultVal",
//          minVal: "minVal",
//          maxVal: "maxVal"
//        })
//      }}>
//        ADD
//      </button>
//    </>
//  )
//}
//
//export default VariationsArray

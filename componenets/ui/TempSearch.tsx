'use client'

type Props = {
    placeholder: string
}

function TempSearch({ placeholder }: Props) {
  return (
    <div className="grid p-24">
      {/* <label className="input-label">Search Your Item/Tool</label>     */}
      <input
        // required
        type="text"
        // defaultValue=
        onChange={(e) => console.log(e.target.value)}
        className="input-field"
        placeholder={placeholder}
      />
    </div>
  )
}

export default TempSearch
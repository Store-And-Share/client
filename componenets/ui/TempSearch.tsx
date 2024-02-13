'use client'

type Props = {}

function TempSearch({}: Props) {
  return (
    <div>
        <label className="input-label">City</label>
      <input
        required
        type="text"
        // defaultValue=
        onChange={(e) => console.log(e.target.value)}
        className="input-field"
      />
    </div>
  )
}

export default TempSearch
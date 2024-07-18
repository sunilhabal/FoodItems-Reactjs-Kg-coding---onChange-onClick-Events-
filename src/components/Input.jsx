// import styles from './Input.module.css'
export default function Input() {

  const handleOnKey = (event) => {
    console.log(event.target.value)
  }
  return (
    <div className="input-group flex-nowrap mx-auto p-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter food item here"
        aria-label="Username"
        aria-describedby="addon-wrapping"
        onKeyDown={handleOnKey}

        // inline onchange
        // onChange={(event) => console.log(event.target.value)}
      />
    </div>
  );
}

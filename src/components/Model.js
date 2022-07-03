function Model(props){

function cancelHandler() {props.onCancel();}
function confirmHandler() {props.onConfirm();}

  return (
    <div className='modal'>
    <p> Are you Sure? </p>
    <button className= 'btn btn--alt'onClick={cancelHandler}>
       Cancel
       </button>
    <button className= 'btn' onClick={confirmHandler}>CONFIRM </button>
    </div>
  );
}
export default Model;
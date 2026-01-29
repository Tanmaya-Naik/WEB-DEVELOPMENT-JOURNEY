import { useRef, useState } from "react"
import { Button } from "./Button";

export function OTP(){

    const ref1=useRef();
    const ref2=useRef();
    const ref3=useRef();
    const ref4=useRef();
    const ref5=useRef();
    const ref6=useRef();
    const [disabled,setDisabled]=useState(true);

    return (
         <div className="flex justify-center mt-8">
            <SubOTPbox reference={ref1} onDone={ () => {
                ref2.current.focus();
            }
        } goback={()=>{
            
        }}/>
            <SubOTPbox reference={ref2} onDone={() => {
                ref3.current.focus();
            }
        }
        goback={()=>{
            ref1.current.focus()
        }}/>
            <SubOTPbox reference={ref3} onDone={() => {
                ref4.current.focus();
        }}
        goback={()=>{
            ref2.current.focus()
        }}/>
            <SubOTPbox reference={ref4} onDone={() => {
                ref5.current.focus();
        }}
        goback={()=>{
            ref3.current.focus()
        }}/>

            <SubOTPbox reference={ref5} onDone={() => {
                ref6.current.focus()
        }}
        goback={()=>{
            ref4.current.focus()
        }}/>
            <SubOTPbox reference={ref6} onDone={() => {
                setDisabled(false)
        }
        }
        goback={()=>{
            ref5.current.focus();
        }}/>

        <Button disabled={disabled}>Signup</Button>
        </div>
       
    )
}

function SubOTPbox({
    reference,onDone,goback
}){
    const [inputBoxval,setinputboxval]=useState("");
    return(
        <div>
            <input value={inputBoxval} ref={reference} onKeyUp={(e) =>{
                if(e.key=="Backspace"){
                    setinputboxval("");
                    goback();
                }
            }} onChange={(e) => {
                const val=e.target.value;
                if(/^[0-9]$/.test(val)){
                    setinputboxval(val);
                    onDone();
                }
                else{

                }
                
            }} type="text"  className="m-1 w-[40px] h-[50px] rounded-2xl bg-[#19406a] outline-none px-4 text-white"/>
        </div>
    )
}
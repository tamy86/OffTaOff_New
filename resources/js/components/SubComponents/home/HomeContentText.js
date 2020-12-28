import React from 'react';
import Container  from '@material-ui/core/Container';

const styleTextContainer= {
    backgroundColor: '#f0f1f4',
    direction: 'rtl',
    width: '80%',
    height: '80%',
    fontFamily:'IRANSans',
    paddingTop: '40px',
};
const headerTextContainer={
    backgroundColor:'#001a33',
    width: '100%',
    color:'#fff',
    fontFamily:'IRANSans',
    textAlign:'center',

};
const textContainer={
    paddingTop:'50px',
    paddingBottom:'20px',
};

function HomeContentText(){

    return(
        <Container  style={styleTextContainer}>

            <div className="card-header" style={headerTextContainer}>
                چند کلام با بازدید کنندگان
            </div>
            <div style={textContainer}>

                وب سایت ها از طریق مرورگرهای وب قابل دسترسی هستند. یک مرورگر وب یک برنامه
                کامپیوتری است که قادر به دانلود و نمایش فایل ها و اجزای تشکیل دهنده وب سایت می باشد.
                وب سایت ها از طریق مرورگرهای وب قابل دسترسی هستند. یک مرورگر وب یک برنامه
                کامپیوتری است که قادر به دانلود و نمایش فایل ها و اجزای تشکیل دهنده وب سایت می باشد.
                مرورگرهای وب محبوب مانند گوگل کروم، موزیلا،
                فایرفاکس،  وب سایت ها از طریق مرورگرهای وب قابل دسترسی هستند. یک مرورگر وب یک برنامه
                کامپیوتری است که قادر به دانلود و نمایش فایل ها و اجزای تشکیل دهنده وب سایت می باشد.
                مرورگرهای وب محبوب مانند گوگل کروم، موزیلا،
                فایرفاکس،  وب سایت ها از طریق مرورگرهای وب قابل دسترسی هستند. یک مرورگر وب یک برنامه
                کامپیوتری است که قادر به دانلود و نمایش فایل ها و اجزای تشکیل دهنده وب سایت می باشد.
                مرورگرهای وب محبوب مانند گوگل کروم، موزیلا، فایرفاکس،
            </div>

        </Container >
    );
}

export default HomeContentText;
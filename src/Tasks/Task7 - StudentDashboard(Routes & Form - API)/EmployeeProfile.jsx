// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";


function EmployeeProfile({employee}){



    if(!employee){

        return <h3>Loading profile...</h3>

    }



    return(

        <div className="profile-container">


            <div className="profile-header">


                <img 
                    src={employee.image}
                    alt={employee.firstName}
                />


                <div>

                    <h1>
                        {employee.firstName} {employee.lastName}
                    </h1>

                    <h3>
                        💻 {employee.company.title}
                    </h3>

                    <p>
                        🏢 {employee.company.name}
                    </p>

                </div>


            </div>




            <div className="profile-section">

                <h2>
                    📞 Contact Information
                </h2>

                <p>
                    📧 Email : {employee.email}
                </p>

                <p>
                    📱 Phone : {employee.phone}
                </p>

                <p>
                    👤 Username : {employee.username}
                </p>

            </div>





            <div className="profile-section">

                <h2>
                    🏢 Work Information
                </h2>


                <p>
                    💼 Department : {employee.company.department}
                </p>


                <p>
                    💻 Job Title : {employee.company.title}
                </p>


                <p>
                    🏢 Company : {employee.company.name}
                </p>


            </div>






            <div className="profile-section">

                <h2>
                    📍 Address
                </h2>


                <p>
                    🏠 Address : {employee.address.address}
                </p>


                <p>
                    🌆 City : {employee.address.city}
                </p>


                <p>
                    🌍 Country : {employee.address.country}
                </p>


            </div>







            <div className="profile-section">

                <h2>
                    🎓 Education
                </h2>


                <p>
                    🎓 University : {employee.university}
                </p>


            </div>



        </div>

    )

}


export default EmployeeProfile;
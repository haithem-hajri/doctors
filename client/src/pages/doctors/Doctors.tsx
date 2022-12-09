import React from "react";
import DoctorCard from "../../components/cards/DoctorCard";
import FiltreBar from "../../components/doctors-component/FiltreBar";
import axios from "axios";
import Paginate from "../../helper/Pagination";
const Doctors = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [page, setPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);
  const [speciality, setSpeciality] = React.useState<any>("");
  const [name, setName] = React.useState<string>("");
  const [doctors, setDoctors] = React.useState<any>();
  React.useEffect(() => {
    console.log("sp:",name)
    setIsLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/doctors?page=${page}}&speciality=${speciality.value}&name=${name}`
      )
      .then((res) => {
        setDoctors(res.data.docs);
        setTotalPages(res.data.totalPages);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(true);
      });
  }, [page, name, speciality]);
  return (
    <>
      <FiltreBar
        setName={setName}
        name={name}
        setSpeciality={setSpeciality}
        speciality={speciality}
      />
      <div className="flex flex-col gap-[30px] max-w-[1200px] m-auto">
        {
          doctors?.map((doctor:any)=>(
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))
        }
       
        
        {!isLoading && totalPages && totalPages > 1 && (
          <Paginate
            totalPages={totalPages && totalPages}
            currentPage={page}
            setCurrentPage={setPage}
          />
        )}
      </div>
    </>
  );
};

export default Doctors;

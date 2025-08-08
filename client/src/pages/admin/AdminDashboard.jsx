import { ComplainSubject } from "@/components/ComplainSubject";
import ComplaintTable from "@/components/ComplainTable";
// import { ReportChart } from "@/components/ReportChart";

export default function AdminDashboard() {
 
  return (
    <div>
      {/* Dashboard Main Content */}
      <div className="flex flex-col md:flex-row lg:flex-row p-6 gap-8 ">
        {/* <div>
          <ReportChart/>
        </div> */}

        <div>
          <ComplainSubject />
        </div>
      </div>
      <div className="flex-1 p-6">
        <h2 className="text-lg font-semibold mb-4">Complain Box</h2>
        <ComplaintTable />
      </div>
    </div>
  );
}

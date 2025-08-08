import ComplainTable from "@/components/ComplainTable"

// import ComplainForm from "@/components/ComplainForm";

export default function UserDashboard() {
  return (
    <div>
      {/* Dashboard Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-lg font-semibold mb-4">My Complain Box</h2>
        <ComplainTable />
        {/* <ComplainForm /> */}
        
      </div>
    </div>
  )
}
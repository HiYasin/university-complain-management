
import ComplaintTable from "@/components/ComplaintTable";
import { useGetAllComplainsQuery } from "@/redux/features/complainApi";

export default function AdminDashboard() {
  const { data, isLoading } = useGetAllComplainsQuery();
  console.log("Admin Dashboard Data:", data);

  return (
    <div>
      {/* Dashboard Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-lg font-semibold mb-4">Complain Box</h2>
        {!isLoading && data?.data?.length > 0 ? (
          <ComplaintTable complaints={data.data} />
        ) : (
          <div className="flex items-center justify-center h-screen">Loading...</div>
        )}
      </div>
    </div>
  );
}

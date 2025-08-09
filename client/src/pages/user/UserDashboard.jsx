
import ComplaintTable from "@/components/ComplaintTable";
import Spinner from "@/components/ui/spinner";
import { getMatricIdFromEmail } from "@/lib/utils";
import { AuthContext } from "@/providers/AuthProvider";
import { useGetComplainsByUserMatricIdQuery } from "@/redux/features/complainApi";
import { useContext } from "react";

// import ComplainForm from "@/components/ComplainForm";

export default function UserDashboard() {
  const { user, loading } = useContext(AuthContext);
  const matricId = getMatricIdFromEmail(user?.email);
  const { data, isLoading } = useGetComplainsByUserMatricIdQuery(matricId);
  if (loading) {
    return <div className="flex items-center justify-center h-screen"><Spinner /></div>;
  }
  return (
    <div>
      {/* Dashboard Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-lg font-semibold mb-4">My Complain Box</h2>
        {!isLoading && data.data.length > 0 ? (
          <ComplaintTable complaints={data.data} />
        ) : (
          <div className="flex items-center justify-center h-screen"><Spinner /></div>
        )}
      </div>
    </div>
  )
}
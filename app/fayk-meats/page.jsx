import { faykMeatsData } from "@/libs/data/fayk-meats/faykMeats";
import FaykMeats from "@/components/fayk-meats-components/FaykMeats";

export default function FaykMeatsPage() {
    return (
        <FaykMeats data={faykMeatsData} />
    )
}
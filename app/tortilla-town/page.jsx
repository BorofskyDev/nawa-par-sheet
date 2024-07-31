import TortillaTown from "@/components/tortilla-town-components/TortillaTown";
import { tortillaTownData } from '@/libs/data/tortilla-town/tortillaTownData'

export default function TortillaTownPage() {
    return (
        <TortillaTown data={tortillaTownData} />
    )
}
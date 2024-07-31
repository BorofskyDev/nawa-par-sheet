import { twoByteMuffinsData } from "@/libs/data/two-byte-muffins/twoByteMuffins";
import TwoByteMuffins from "@/components/two-byte-muffins/TwoByteMuffins";

export default function TwoByteMuffinsPage() {
    return (
        <TwoByteMuffins data={twoByteMuffinsData} />
    )
}
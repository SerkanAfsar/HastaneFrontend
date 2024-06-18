import { Hospital as HospitalType } from "@/Types";
import { formatPhoneNumber } from "@/Utils";

export default function Hospital({ hospital }: { hospital: HospitalType }) {
  return (
    <div className="flex h-full flex-col items-start justify-start gap-1 rounded border border-t-0 border-black text-black shadow-lg">
      <div className="flex min-h-[85px] w-full items-center justify-center rounded rounded-b-none border border-b-0 border-l-0 border-r-0 border-t-0 border-black bg-colorOne p-3 text-center text-sm text-white">
        {hospital.name}
      </div>
      <div className="text-md flex flex-col gap-2 p-3 text-sm">
        <span>{hospital.address}</span>
        <span>
          {hospital.cityName} - {hospital.district}
        </span>
      </div>
      {hospital.phone && (
        <div className="text-md mt-auto flex p-3">
          <span className="mr-2 font-bold">Telefon:</span>
          <a
            className="underline"
            title={`${hospital.name} Telefon`}
            href={`tel:${hospital.phone}`}
          >
            {formatPhoneNumber(hospital.phone)}
          </a>
        </div>
      )}
    </div>
  );
}

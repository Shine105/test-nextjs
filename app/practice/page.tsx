const dispatch = useDispatch();
const persistedInventory = useSelector((state) => state.inventory.data); // Get persisted data

const {  data: InventoryData, error: inventoryError } = useSWR(LiveInventoryAPIURL, fetcher, {
fallbackData: persistedInventory, // Use persisted data if available
onSuccess: (fetchedData) => {
  dispatch(setInventoryData(fetchedData)); // Save to Redux
},
});



console.log("My inventory data",(InventoryData))

if (inventoryError) return <p>Error loading data.</p>;
if (!InventoryData && InventoryData.length === 0) return <p>Loading...</p>;


 
const slicedData = InventoryData?.data?.slice(0,10) || []
console.log("Redux Inventory Length:", persistedInventory?.length);
const inventoryList = slicedData.map(item => ({
    title: `${item.brand} ${item.model}`,
    price: item.max_price,
    engineHours: item.engine_hours,
    driveType: item.drive_type,
    enginePower: item.engine_power,
    tractorId: item.tractor_id,
    id: item.user_id,
    imageUrl: item.processed_images,
  })) || [];



  const compareTractorData = {

    oneData: [

        {
            brand1: 'Mahindra 475 DI',
            brand2: 'Kubota MU401 2WD',
            brand1hp: '42 HP',
            brand2hp: '42 HP',
            brand1price: '₹ 6.45-6.75 Lakh*',
            brand2price: '₹ 8.30-8.40 Lakh*'
        }


        import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setInventoryData } from "@/store/inventorySlice";

export async function getStaticProps(context) {
    // Fetch locale settings
    const localeProps = await getLocaleProps(context);

    // Fetch inventory data at build time
    const res = await fetch(LiveInventoryAPIURL);
    const inventoryData = await res.json();

    return {
        props: {
            locale: localeProps.locale,
            inventoryData, // Pass data to the component
        },
        revalidate: 10, // ISR: Rebuild the page every 10 seconds
    };
}

export default function HomePage({ locale, inventoryData }) {
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState("oneData");
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showCallRequestModal, setShowCallRequestModal] = useState(false);
    
    const router = useRouter();
    const { t, i18n } = useTranslation("common");
    const dispatch = useDispatch();

    // Redux inventory state
    const persistedInventory = useSelector((state) => state.inventory.data);

    // Dispatch fetched inventory data if needed
    useMemo(() => {
        if (!persistedInventory || persistedInventory?.data?.length === 0) {
            dispatch(setInventoryData(inventoryData));
        }
    }, [persistedInventory, inventoryData, dispatch]);

    // Determine final inventory data
    const finalInventory = useMemo(() => {
        return persistedInventory?.data?.length > 0 ? persistedInventory : inventoryData || { data: [] };
    }, [persistedInventory, inventoryData]);

    // Process inventory list data
    const inventoryList = useMemo(() => {
        if (!finalInventory?.data?.length) return [];
        return finalInventory.data.map((item) => ({
            title: `${item.brand} ${item.model}`,
            price: item.max_price,
            engineHours: item.engine_hours,
            driveType: item.drive_type,
            enginePower: item.engine_power,
            tractorId: item.tractor_id,
        }));
    }, [finalInventory]);

    // Prepare compareTractorData
    const slicedDataCompare = useMemo(() => inventoryList.slice(0, 100), [inventoryList]);
    const compareTractorData = useMemo(() => getHomePageTractorsListBasedOnInventory(slicedDataCompare), [slicedDataCompare]);

    return (
        <div>
            <h1>{t("home.title")}</h1>
            {inventoryList.length === 0 ? (
                <p>Loading latest data...</p>
            ) : (
                <pre>{JSON.stringify(compareTractorData, null, 2)}</pre>
            )}
        </div>
    );
}





        
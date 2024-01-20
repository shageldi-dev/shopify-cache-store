import { Button, Tooltip } from "antd";
import "./sync.css";
import { useSyncMutation } from "../../store/products/product.slice";

const SyncButton = () => {
  const [sync, { isLoading }] = useSyncMutation();
  const handleSync = async () => {
    try {
      await sync({ data: {} }).unwrap();
      console.log("Sync successful!");
    } catch (err) {
      console.error("Sync failed:", err);
    }
  };
  return (
    <Tooltip title="Sync products">
      <Button
        loading={isLoading}
        onClick={handleSync}
        type="default"
        id="sync-button"
        icon={<img src="/uil_sync.svg" id="sync-icon" />}
      />
    </Tooltip>
  );
};

export default SyncButton;

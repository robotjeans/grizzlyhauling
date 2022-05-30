import TextInput from '@/components/ui/TextInput';
import Button from '@/components/ui/Button';

function SubscribeForm() {
  return (
    <form className='class="mt-12 sm:max-w-lg sm:w-full sm:flex mb-12"'>
      <TextInput
        label="Subscribe and stay current."
        placeholder="Please subscribe."
        name="subscribe"
        type="email"
      />
      <div className="mt-4 sm:mt-0 sm:ml-3">
        <Button type="submit" variant="secondary">
          Subcribe →
        </Button>
      </div>
    </form>
  );
}

export default SubscribeForm;

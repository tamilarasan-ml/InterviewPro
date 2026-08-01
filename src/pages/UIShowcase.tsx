import { useState } from "react";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Badge from "../components/ui/Badge";
import Modal from "../components/ui/Modal";
import Card from "../components/ui/Card";

const UIShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-10 p-8">

      <h1 className="text-3xl font-bold">
        InterviewPro AI Design System
      </h1>

      {/* Button */}

      <Card>
        <h2 className="mb-4 text-xl font-semibold">
          Button Component
        </h2>

        <div className="flex gap-4 flex-wrap">
          <Button>Primary</Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="outline">
            Outline
          </Button>

          <Button variant="danger">
            Delete
          </Button>
        </div>
      </Card>

      {/* Input */}

      <Card>
        <h2 className="mb-6 text-xl font-semibold">
          Input Component
        </h2>

        <div className="space-y-5">

          <Input
            label="Full Name"
            placeholder="Enter your name"
          />

          <Input
            label="Email"
            helperText="We'll never share your email."
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            required
            placeholder="Enter password"
          />

          <Input
            label="Username"
            error="Username already exists"
          />

          <Input
            label="Phone"
            disabled
            placeholder="Disabled Input"
          />

        </div>
      </Card>

      {/* Badge */}

      <Card>
        <h2 className="mb-4 text-xl font-semibold">
          Badge Component
        </h2>

        <div className="flex gap-3 flex-wrap">

          <Badge>Neutral</Badge>

          <Badge variant="success">
            Completed
          </Badge>

          <Badge variant="warning">
            Pending
          </Badge>

          <Badge variant="error">
            Failed
          </Badge>

          <Badge variant="info">
            New
          </Badge>

          <Badge rounded={false}>
            Rectangle
          </Badge>

        </div>
      </Card>

      {/* Modal */}

      <Card>

        <h2 className="mb-4 text-xl font-semibold">
          Modal Component
        </h2>

        <Button
          onClick={() => setIsModalOpen(true)}
        >
          Open Modal
        </Button>

        <Modal
          isOpen={isModalOpen}
          title="InterviewPro AI"
          onClose={() => setIsModalOpen(false)}
        >
          <p>
            Congratulations 🎉
          </p>

          <p className="mt-2">
            You have successfully built
            InterviewPro AI UI Library.
          </p>

        </Modal>

      </Card>

    </div>
  );
};

export default UIShowcase;
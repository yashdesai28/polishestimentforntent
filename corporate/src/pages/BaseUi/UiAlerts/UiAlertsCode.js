import PrismCode from "../../../Components/Common/Prism";

// Default Alerts

const defaultAlertsCode =
    `
<!-- Primary Alert -->
<Alert color="primary">
    <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
</Alert>

<!-- Secondary Alert -->
<Alert color="secondary">
    <strong> How are you! </strong> A simple <b>secondary alert</b> —check it out!
</Alert>

<!-- Success Alert -->
<Alert color="success">
    <strong> Yey! Everything worked! </strong> A simple <b>success alert</b> —check it out!
</Alert>

<!-- Danger Alert -->
<Alert color="danger">
    <strong> Something is very wrong! </strong> A simple <b>danger alert</b> —check it out!
</Alert>

<!-- Warning Alert -->
<Alert color="warning">
    <strong> Uh oh, something went wrong </strong> A simple <b>warning alert</b> —check it out!
</Alert>

<!-- Info Alert -->
<Alert color="info">
    <strong> Don't forget' it ! </strong> A simple <b>info alert</b> —check it out!
</Alert>

<!-- Light Alert -->
<Alert color="light">
    <strong> Mind Your Step! </strong> A simple <b>light alert</b> —check it out!
</Alert>

<!-- Dark Alert -->
<Alert color="dark">
    <strong> Did you know? </strong> A simple <b>dark alert</b> —check it out!
</Alert>
`;

const DefaultAlertsExample = () => (
    <PrismCode
        code={defaultAlertsCode}
        language={("js", "css", "html")}
        plugins={["line-numbers"]}
    />
);


// Borderless Alerts

const borderlessAlertsCode = `
<!-- Primary Alert -->
<Alert color="primary" className="border-0">
    <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
</Alert>

<!-- Secondary Alert -->
<Alert color="secondary" className="border-0">
    <strong> How are you! </strong> A simple <b>secondary alert</b> —check it out!
</Alert>

<!-- Success Alert -->
<Alert color="success" className="border-0">
    <strong> Yey! Everything worked! </strong> A simple <b>success alert</b> —check it out!
</Alert>

<!-- Danger Alert -->
<Alert color="danger" className="border-0 mb-xl-0">
    <strong> Something is very wrong! </strong> A simple danger alert—check it out!
</Alert>

<!-- Warning Alert -->
<Alert color="warning" className="border-0">
    <strong> Uh oh, something went wrong </strong> A simple <b>warning alert</b> —check it out!
</Alert>

<!-- Info Alert -->
<Alert color="info" className="border-0">
    <strong>Don't forget' it !</strong> A simple <b>info alert</b> —check it out!
</Alert>

<!-- Light Alert -->
<Alert color="light" className="border-0 bg-light">
    <strong>Mind Your Step!</strong> A simple <b>light alert</b> —check it out!
</Alert>

<!-- Dark Alert -->
<Alert color="dark" className="border-0 mb-0">
    <strong>Did you know?</strong> A simple <b>dark alert</b> —check it out!
</Alert>`;

const BorderlessExample = () => (
    <PrismCode
        code={borderlessAlertsCode}
        language={("js", "css", "html")}
        plugins={["line-numbers"]}
    />
);

// Dismissing Alerts

const dismissingAlertsCode = `
<!-- Primary Alert -->
<UncontrolledAlert color="primary">
    <strong> Hi! </strong> A simple <b>Dismissible primary Alert </b> — check it out!
</UncontrolledAlert>

<!-- Secondary Alert -->
<UncontrolledAlert color="secondary">
    <strong> How are you! </strong> A simple <b>Dismissible secondary alert</b> —check it out!
</UncontrolledAlert>

<!-- Success Alert -->
<UncontrolledAlert color="success">
    <strong>Right Way !</strong> A simple <b>Dismissible success alert</b> —check it out!
</UncontrolledAlert>

<!-- Danger Alert -->
<UncontrolledAlert color="danger" className="mb-xl-0">
    <strong> Something is very wrong! </strong> A simple <b>Dismissible danger alert</b> —check it out!
</UncontrolledAlert>

<!-- Warning Alert -->
<UncontrolledAlert color="warning">
    <strong>Welcome Back!</strong> A simple <b>Dismissible warning alert</b> —check it out!
</UncontrolledAlert>

<!-- Info Alert -->
<UncontrolledAlert color="info">
    <strong>Don't forget' it !</strong> A simple <b>Dismissible info alert</b> —check it out!
</UncontrolledAlert>

<!-- Light Alert -->
<UncontrolledAlert color="light">
    <strong>Mind Your Step!</strong> A simple <b>Dismissible light alert</b> —check it out!
</UncontrolledAlert>

<!-- Dark Alert -->
<UncontrolledAlert color="dark" className="mb-0">
    <strong>Did you know?</strong> A simple <b>Dismissible dark alert</b> —check it out!
</UncontrolledAlert>`;

const DismissingExample = () => (
    <PrismCode
        code={dismissingAlertsCode}
        language={("js", "css", "html")}
        plugins={["line-numbers"]}
    />
);

// Link Color Alerts

const linkColorAlertsCode = `
<!-- Primary Alert -->
<Alert color="primary">
    A simple Primary alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
</Alert>

<!-- Secondary Alert -->
<Alert color="secondary">
    A simple Secondary alert with <Link to="#" className="alert-link">an example link</Link>.  Give it a click if you like.
</Alert>

<!-- Success Alert -->
<Alert color="success">
    A simple Success alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
</Alert>

<!-- Danger Alert -->
<Alert color="danger" className="mb-xl-0">
    A simple Danger alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
</Alert>

<!-- Warning Alert -->
<Alert color="warning">
    A simple Warning alert with <Link to="#" className="alert-link">an example link</Link>. Give  it a click if you like.
</Alert>

<!-- Info Alert -->
<Alert color="info">
    A simple Info alert with <Link to="#" className="alert-link">an example link</Link>. Give it  a click if you like.
</Alert>

<!-- Light Alert -->
<Alert color="light">
    A simple Light alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
</Alert>

<!-- Dark Alert -->
<Alert color="dark" className="mb-0">
    A simple Dark alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
</Alert>`;

const LinkColorExample = () => (
    <PrismCode
        code={linkColorAlertsCode}
        language={("js", "css", "html")}
        plugins={["line-numbers"]}
    />
);

// Live Alert Example

const liveAlertsCode = `
const [show, setShow] = useState(false);
<Alert color="success" isOpen={show} toggle={() => setShow(false)}>
    Nice, you triggered this alert message!
</Alert>
<button type="button" className="btn btn-primary" id="liveAlertBtn" onClick={() => setShow(true)}>Show live alert</button>`;

const LiveExample = () => (
    <PrismCode
        code={liveAlertsCode}
        language={("js", "css", "html", "jsx")}
        plugins={["line-numbers"]}
    />
);

// Outline Alerts

const outlineAlertsCode = `
<!-- Primary Alert -->
<UncontrolledAlert color="primary" className="border-2 bg-body-secondary">
    <strong> Hi! </strong> - Outline <b>primary alert</b> example
</UncontrolledAlert>

<!-- Secondary Alert -->
<UncontrolledAlert color="secondary" className="border-2 bg-body-secondary">
    <strong> How are you! </strong> - Outline <b>secondary alert</b> example
</UncontrolledAlert>

<!-- Success Alert -->
<UncontrolledAlert color="success" className="border-2 bg-body-secondary">
    <strong> Yey! Everything worked! </strong> - Outline <b>success alert</b> example
</UncontrolledAlert>

<!-- Danger Alert -->
<UncontrolledAlert color="danger" className="border-2 bg-body-secondary mb-xl-0">
    <strong> Something is very wrong! </strong> - Outline <b>danger alert</b> example
</UncontrolledAlert>

<!-- Warning Alert -->
<UncontrolledAlert color="warning" className="border-2 bg-body-secondary">
    <strong> Uh oh, something went wrong! </strong> - Outline <b>warning alert</b> example
</UncontrolledAlert>

<!-- Info Alert -->
<UncontrolledAlert color="info" className="border-2 bg-body-secondary">
    <strong>Don't forget' it !</strong> - Outline <b>info alert</b> example
</UncontrolledAlert>

<!-- Dark Alert -->
<UncontrolledAlert color="dark" className="border-2 bg-body-secondary mb-0">
    <strong>Did you know?</strong> - Outline <b>dark alert</b> example
</UncontrolledAlert>`;

const OutlineAlertsExample = () => (
    <PrismCode
        code={outlineAlertsCode}
        language={("js", "css", "html")}
        plugins={["line-numbers"]}
    />
);


// Left Border Alerts

const leftBorderAlertsCode = `
<!-- Primary Alert -->
<UncontrolledAlert color="primary" className="alert-border-left">
    <i className="ri-user-smile-line me-3 align-middle fs-16"></i><strong>Primary</strong> - Left border alert
</UncontrolledAlert>

<!-- Secondary Alert -->
<UncontrolledAlert color="secondary" className="alert-border-left">
    <i className="ri-check-double-line me-3 align-middle fs-16"></i><strong>Secondary</strong> - Left border alert
</UncontrolledAlert>

<!-- Success Alert -->
<UncontrolledAlert color="success" className="alert-border-left">
    <i className="ri-notification-off-line me-3 align-middle fs-16"></i><strong>Success</strong> - Left border alert
</UncontrolledAlert>

<!-- Danger Alert -->
<UncontrolledAlert color="danger" className="alert-border-left mb-xl-0">
    <i className="ri-error-warning-line me-3 align-middle fs-16"></i><strong>Danger</strong> - Left border alert
</UncontrolledAlert>

<!-- Warning Alert -->
<UncontrolledAlert color="warning" className="alert-border-left">
    <i className="ri-alert-line me-3 align-middle fs-16"></i><strong>Warning</strong> - Left border alert
</UncontrolledAlert>

<!-- Info Alert -->
<UncontrolledAlert color="info" className="alert-border-left">
    <i className="ri-airplay-line me-3 align-middle fs-16"></i><strong>Info</strong> - Left border alert
</UncontrolledAlert>

<!-- Light Alert -->
<UncontrolledAlert color="light" className="alert-border-left">
    <i className="ri-mail-line me-3 align-middle fs-16"></i><strong>Light</strong> - Left border alert
</UncontrolledAlert>

<!-- Dark Alert -->
<UncontrolledAlert color="dark" className="alert-border-left mb-0">
    <i className="ri-refresh-line me-3  align-middle fs-16"></i><strong>Dark</strong> - Left border alert
</UncontrolledAlert>`;

const LeftBorderAlertsExample = () => (
    <PrismCode
        code={leftBorderAlertsCode}
        language={("js", "css", "html")}
        plugins={["line-numbers"]}
    />
);


// Label Icon Alerts

const labelIconAlertsCode = `
<!-- Primary Alert -->
<UncontrolledAlert color="primary" className="alert-primary alert-dismissible bg-primary text-white alert-label-icon fade show">
    <i className="ri-user-smile-line label-icon"></i><strong>Primary</strong> -Label icon alert 
</UncontrolledAlert>

<!-- Secondary Alert -->
<UncontrolledAlert color="secondary" className="alert-secondary alert-dismissible bg-secondary text-white alert-label-icon fade show">
    <i className="ri-check-double-line label-icon"></i><strong>Secondary</strong> - Label icon alert
</UncontrolledAlert>

<!-- Success Alert -->
<UncontrolledAlert color="success" className="alert-success alert-dismissible bg-success text-white alert-label-icon fade show">
    <i className="ri-notification-off-line label-icon"></i><strong>Success</strong> - Label icon alert
</UncontrolledAlert>

<!-- Danger Alert -->
<UncontrolledAlert color="danger" className="alert-danger alert-dismissible bg-danger text-white alert-label-icon fade show mb-xl-0">
    <i className="ri-error-warning-line label-icon"></i><strong>Danger</strong> - Label icon alert
</UncontrolledAlert>

<!-- Warning Alert -->
<UncontrolledAlert color="warning" className="alert-warning alert-dismissible bg-warning text-white alert-label-icon fade show">
    <i className="ri-alert-line label-icon"></i><strong>warning</strong> - Label icon alert
</UncontrolledAlert>

<!-- Info Alert -->
<UncontrolledAlert color="info" className="alert-info alert-dismissible bg-info text-white alert-label-icon fade show">
    <i className="ri-airplay-line label-icon"></i><strong>Info</strong> - Label icon alert
</UncontrolledAlert>

<!-- Light Alert -->
<UncontrolledAlert color="light" className="alert-light alert-dismissible bg-light text-white alert-label-icon fade show">
    <i className="ri-mail-line label-icon"></i><strong>Light</strong> - Label icon alert
</UncontrolledAlert>

<!-- Dark Alert -->
<UncontrolledAlert color="dark" className="alert-dark alert-dismissible bg-dark text-white alert-label-icon fade show mb-0">
    <i className="ri-refresh-line label-icon"></i><strong>Dark</strong> - Label icon alert
</UncontrolledAlert>`;

const LabelIconAlertsExample = () => (
    <PrismCode
        code={labelIconAlertsCode}
        language={("js", "css", "html")}
        plugins={["line-numbers"]}
    />
);


// Top Border with Outline Alerts Alerts

const topBarAlertsCode = `
<!-- Primary Alert -->
<UncontrolledAlert color="primary" className="alert-top-border">
    <i className="ri-user-smile-line me-3 align-middle fs-16 text-primary"></i><strong>Primary</strong> - Top border alert
</UncontrolledAlert>

<!-- Secondary Alert -->
<UncontrolledAlert color="secondary" className="alert-top-border">
    <i className="ri-check-double-line me-3 align-middle fs-16 text-secondary"></i><strong>Secondary</strong> - Top border alert
</UncontrolledAlert>

<!-- Success Alert -->
<UncontrolledAlert color="success" className="alert-top-border">
    <i className="ri-notification-off-line me-3 align-middle fs-16 text-success"></i><strong>Success</strong> - Top border alert
</UncontrolledAlert>

<!-- Danger Alert -->
<UncontrolledAlert color="danger" className="alert-top-border mb-xl-0">
    <i className="ri-error-warning-line me-3 align-middle fs-16 text-danger "></i><strong>Danger</strong> - Top border alert
</UncontrolledAlert>

<!-- Warning Alert -->
<UncontrolledAlert color="warning" className="alert-top-border">
    <i className="ri-alert-line me-3 align-middle fs-16 text-warning"></i><strong>Warning</strong> - Top border alert
</UncontrolledAlert>

<!-- Info Alert -->
<UncontrolledAlert color="info" className="alert-top-border">
    <i className="ri-airplay-line me-3 align-middle fs-16 text-info"></i><strong>Info</strong> - Top border alert
</UncontrolledAlert>

<!-- Light Alert -->
<UncontrolledAlert color="light" className="alert-top-border">
    <i className="ri-mail-line me-3 align-middle fs-16 text-body"></i><strong>Light</strong> - Top border alert
</UncontrolledAlert>

<!-- Dark Alert -->
<UncontrolledAlert color="dark" className="alert-top-border mb-0">
    <i className="ri-refresh-line me-3 align-middle fs-16 text-body"></i><strong>Dark</strong> - Top border alert
</UncontrolledAlert>`;

const TopBarAlertsExample = () => (
    <PrismCode
        code={topBarAlertsCode}
        language={("js", "css", "html")}
        plugins={["line-numbers"]}
    />
);


// Label Icon Arrow Alerts Alerts Alerts

const labelIconArrowAlertsCode = `
<!-- Primary Alert -->
<UncontrolledAlert color="primary" className="alert-label-icon label-arrow ">
 <i className="ri-user-smile-line label-icon"></i><strong>Primary</strong> - Label icon arrow alert
</UncontrolledAlert>

<!-- Secondary Alert -->
<UncontrolledAlert color="secondary" className="alert-label-icon label-arrow ">
    <i className="ri-check-double-line label-icon"></i><strong>Secondary</strong> - Label icon arrow alert
</UncontrolledAlert>

<!-- Success Alert -->
<UncontrolledAlert color="success" className="alert-label-icon label-arrow ">
    <i className="ri-notification-off-line label-icon"></i><strong>Success</strong> - Label icon arrow alert
</UncontrolledAlert>

<!-- Danger Alert -->
<UncontrolledAlert color="danger" className="alert-label-icon label-arrow mb-xl-0">
    <i className="ri-error-warning-line label-icon"></i><strong>Danger</strong> - Label icon arrow alert
</UncontrolledAlert>

<!-- Warning Alert -->
<UncontrolledAlert color="warning" className="alert-label-icon label-arrow ">
    <i className="ri-alert-line label-icon"></i><strong>Warning</strong> - Label icon arrow alert
</UncontrolledAlert>

<!-- Info Alert -->
<UncontrolledAlert color="info" className="alert-label-icon label-arrow ">
    <i className="ri-airplay-line label-icon"></i><strong>Info</strong> - Label icon arrow alert
</UncontrolledAlert>

<!-- Light Alert -->
<UncontrolledAlert color="light" className="alert-label-icon label-arrow ">
    <i className="ri-mail-line label-icon"></i><strong>Light</strong> - Label icon arrow alert
</UncontrolledAlert>

<!-- Dark Alert -->
<UncontrolledAlert color="dark" className="alert-label-icon label-arrow mb-0">
    <i className="ri-refresh-line label-icon"></i><strong>Dark</strong> - Label icon arrow alert
</UncontrolledAlert>`;

const LabelIconArrowAlertsExample = () => (
    <PrismCode
        code={labelIconArrowAlertsCode}
        language={("js", "css", "html")}
        plugins={["line-numbers"]}
    />
);


// Rounded Label Icon Alerts

const roundedLabelIconAlertsCode = `
<!-- Primary Alert -->
<UncontrolledAlert color="primary" className="alert-label-icon rounded-label">
    <i className="ri-user-smile-line label-icon"></i><strong>Primary</strong> - Rounded label alert 
</UncontrolledAlert>

<!-- Secondary Alert -->
<UncontrolledAlert color="secondary" className="alert-label-icon rounded-label">
    <i className="ri-check-double-line label-icon"></i><strong>Secondary</strong> - Rounded label alert
</UncontrolledAlert>

<!-- Success Alert -->
<UncontrolledAlert color="success" className="alert-label-icon rounded-label">
    <i className="ri-notification-off-line label-icon"></i><strong>Success</strong> - Rounded label alert
</UncontrolledAlert>

<!-- Danger Alert -->
<UncontrolledAlert color="danger" className="alert-label-icon rounded-label">
    <i className="ri-error-warning-line label-icon"></i><strong>Danger</strong> - Rounded label alert
</UncontrolledAlert>

<!-- Warning Alert -->
<UncontrolledAlert color="warning" className="alert-label-icon rounded-label">
    <i className="ri-alert-line label-icon"></i><strong>Warning</strong> - Rounded label alert 
</UncontrolledAlert>

<!-- Info Alert -->
<UncontrolledAlert color="info" className="alert-label-icon rounded-label">
    <i className="ri-airplay-line label-icon"></i><strong>Info</strong> - Rounded label alert
</UncontrolledAlert>

<!-- Light Alert -->
<UncontrolledAlert color="light" className="alert-label-icon rounded-label">
    <i className="ri-mail-line label-icon"></i><strong>Light</strong> - Rounded label alert
</UncontrolledAlert>

<!-- Dark Alert -->
<UncontrolledAlert color="dark" className="alert-label-icon rounded-label">
    <i className="ri-refresh-line label-icon"></i><strong>Dark</strong> - Rounded label alert
</UncontrolledAlert>`;

const RoundedLabelIconAlertsExample = () => (
    <PrismCode
        code={roundedLabelIconAlertsCode}
        language={("js", "css", "html")}
        plugins={["line-numbers"]}
    />
);


// Additional Content Alerts

const additionalContentAlertsCode = `
<!-- Primary Alert -->
<UncontrolledAlert color="primary" className="alert-additional">
<div className="alert-body">
    <div className="d-flex">
        <div className="flex-shrink-0 me-3">
            <i className="ri-error-warning-line fs-16 align-middle"></i>
        </div>
        <div className="flex-grow-1">
        <h5 className="alert-heading">Well done !</h5>
            <p className="mb-0">Aww yeah, you successfully read this important alert message. </p>
        </div>
    </div>
</div>
<div className="alert-content">
    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
</UncontrolledAlert>

<!-- Success Alert -->
<UncontrolledAlert color="success" className="alert-additional">
<div className="alert-body">
    <div className="d-flex">
        <div className="flex-shrink-0 me-3">
            <i className="ri-notification-off-line fs-16 align-middle"></i>
        </div>
        <div className="flex-grow-1">
        <h5 className="alert-heading">Yey! Everything worked!</h5>
            <p className="mb-0">This alert needs your attention, but it's not super important.</p>
        </div>
    </div>
</div>
<div className="alert-content">
    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
</UncontrolledAlert>

<!-- Danger Alert -->
<UncontrolledAlert color="danger" className="alert-additional mb-xl-0">
<div className="alert-body">
    <div className="d-flex">
        <div className="flex-shrink-0 me-3">
            <i className="ri-alert-line fs-16 align-middle"></i>
        </div>
        <div className="flex-grow-1">
        <h5 className="alert-heading">Something is very wrong!</h5>
            <p className="mb-0">Change a few things up and try submitting again.</p>
        </div>
    </div>
</div>
<div className="alert-content">
    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
</UncontrolledAlert>

<!-- Warning Alert -->
<UncontrolledAlert color="warning" className="alert-additional mb-0">
<div className="alert-body">
    <div className="d-flex">
        <div className="flex-shrink-0 me-3">
            <i className="ri-alert-line fs-16 align-middle"></i>
        </div>
        <div className="flex-grow-1">
        <h5 className="alert-heading">Uh oh, something went wrong!</h5>
            <p className="mb-0">Better check yourself, you're not looking too good.</p>
        </div>
    </div>
</div>
<div className="alert-content">
<p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
</UncontrolledAlert>
`;

const AdditionalContentAlertsExample = () => (
    <PrismCode
        code={additionalContentAlertsCode}
        language={("js", "css", "html")}
        plugins={["line-numbers"]}
    />
);



// Solid Alerts

const solidAlertsCode = `
<!-- Primary Alert -->
<Alert color="primary" className="bg-primary border-primary text-white">
    <strong>Hi!</strong> - Solid <b>primary alert</b> example
</Alert>

<!-- Secondary Alert -->
<Alert color="secondary" className="bg-secondary border-secondary text-white">
    <strong>How are you!</strong> - Solid <b>secondary alert</b> example
</Alert>

<!-- Success Alert -->
<Alert color="success" className="bg-success border-success text-white">
    <strong>Yey! Everything worked! </strong> - Solid <b>success alert</b> example
</Alert>

<!-- Danger Alert -->
<Alert color="danger" className="bg-danger border-danger text-white mb-xl-0">
    <strong>Something is very wrong!</strong> - Solid <b>danger alert</b> example
</Alert>

<!-- Warning Alert -->
<Alert color="warning" className="bg-warning border-warning text-white">
    <strong>Uh oh, something went wrong!</strong> - Solid <b>warning alert</b> example
</Alert>

<!-- Info Alert -->
<Alert color="info" className="bg-info border-info text-white">
    <strong>Don't forget' it !</strong> - Solid <b>info alert</b> example
</Alert>

<!-- Light Alert -->
<Alert color="light" className="bg-light border-light text-body">
    <strong>Mind Your Step!</strong> - Solid <b>secondary alert</b> example
</Alert>

<!-- Dark Alert -->
<Alert color="dark" className="bg-dark border-dark text-white mb-0">
    <strong>Did you know?</strong> - Solid <b>dark alert</b> example
</Alert>`;

const SolidAlertsExample = () => (
    <PrismCode
        code={solidAlertsCode}
        language={("js", "css", "html")}
        plugins={["line-numbers"]}
    />
);


export { DefaultAlertsExample, BorderlessExample, DismissingExample, LinkColorExample, LiveExample, OutlineAlertsExample, LeftBorderAlertsExample, LabelIconAlertsExample, TopBarAlertsExample, LabelIconArrowAlertsExample, RoundedLabelIconAlertsExample, SolidAlertsExample, AdditionalContentAlertsExample };

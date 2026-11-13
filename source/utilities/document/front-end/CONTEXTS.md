# Contexts

How the front end shares what a user types between the `<Form>`s on a page. The contexts live in `source/modules/context/`; where the typed values go next is in [SERVER.md](../back-end/SERVER.md).

---

A **context** is a value that many components can read without passing it down as a prop through every layer in between. Each context comes in three parts:

| Part         | In `EmailContext.tsx` | What it does                                                                   |
| ------------ | --------------------- | ------------------------------------------------------------------------------ |
| The context  | `EmailContext`        | The shared box itself, created empty                                           |
| The provider | `<EmailProvider>`     | A component that owns the value (`useState`) and puts it in the box            |
| The hook     | `useEmail()`          | How a component reads and changes it: `let { email, setEmail } = useEmail();` |

**Only components inside a provider can use its hook.** Outside one, `useEmail()` throws `useEmail must be used within an EmailProvider` on purpose, so a missing provider fails loudly instead of quietly losing what the user typed.

**Where the providers sit.** `loadPage()` in `source/index.tsx` wraps every page in both:

```tsx
ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <EmailProvider>
      <PasswordProvider>{container}</PasswordProvider>
    </EmailProvider>
  </React.StrictMode>,
);
```

**Every page has its own copy.** `index.tsx` creates one React root per `#${pageName}-body`, and a provider can't reach across roots. So the `<Form>`s on one page share one email and one password (type your email in Register and Verify already knows it), but Pick a Page and the Archive never see each other's. That's how the finished app behaves: a user logs in on one page.

**Keep the password in memory only.** It lives in the context while the user types and is sent to the server once. Never write it to `localStorage`, a cookie, the console or a log, and only ever send it over HTTPS outside your own machine. The server is the only place that hashes it.

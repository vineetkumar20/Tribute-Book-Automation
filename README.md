# 🧪 Nightwatch Automation Framework

This project uses Nightwatch.js for end-to-end testing across different environments and configurations.

---

## 🚀 Running Tests

### ✅ Run on BrowserStack (Chrome on macOS)
```bash
npx nightwatch --env browserstack.chrome.macOS --config configs/stage.conf.js --tags "@stage"
```

### ✅ Run on Safari (Local)
```bash
npx nightwatch --env safari --config configs/stage.conf.js --tags "@TC_001001"
```

### ✅ Run on Chrome (Dev Environment)
```bash
npx nightwatch --env chrome --config configs/dev.conf.js --tags @gsfesf
```

### ✅ Run with Default Environment
```bash
npx nightwatch --tags "@gsef22"
```

---

## 📘 Test Tags

- `@ghgsefes` → Runs the `signGuestBook` test
- `@gsef22` → Runs the `guestBook` test

---

## 🛠️ Notes for Automation Test Setup

When changing the book for automation testing:

1. **Add Media**  
   Use the media titled:  
   ```
   "This media will be used for automation testing"
   ```

2. **Add Tributes**  
   Use the following tribute details:  
   ```
   Tribute Name: "Tribute00202"
   Tribute ID: TR0020202
   ```
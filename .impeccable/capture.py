import sys, subprocess, os, tempfile
sys.path.insert(0, r"D:/Projects/Housing/.claude/skills/logo-design/scripts")
import render_png as r
chrome = r.find_chrome()
def shot(url, out, w, h):
    with tempfile.TemporaryDirectory() as tmp:
        cmd = [chrome, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", "--force-device-scale-factor=1",
               f"--window-size={w},{h}", f"--screenshot={os.path.abspath(out)}", f"--user-data-dir={os.path.join(tmp,'p')}",
               "--virtual-time-budget=4000", url]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=90)
    print(out, os.path.exists(out))
for url, out, w, h in [a.split("|") for a in sys.argv[1:]]:
    shot(url, out, int(w), int(h))

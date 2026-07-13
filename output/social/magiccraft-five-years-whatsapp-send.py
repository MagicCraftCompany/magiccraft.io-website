#!/usr/bin/env python3
"""Duplicate-safe Marketing Viral Team handoff for the MagicCraft 7-day campaign."""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Any


TARGET = "120363037628945057@g.us"
GROUP_ID = TARGET
ARCHIVE = Path(
    "/home/james/.merlin/group-archives/"
    "whatsapp_default_120363037628945057_g.us.jsonl"
)
MEDIA_DIR = Path(
    "/home/james/.merlin/media/outbound/magiccraft-five-years-20260714"
)
LEDGER = MEDIA_DIR / "post-ledger.jsonl"


INTRO = {
    "marker": "MC5Y-20260714-INTRO",
    "media": None,
    "message": """@639196837142 Ivan

MagicCraft: The Build Story 2021-2026
The seven-day poster and X campaign is ready.

Please post one item per day on the official MagicCraft X account at 18:00 ICT:
14 Jul: MagicCraft Game
15 Jul: Merlin AI
16 Jul: Akyn
17 Jul: MagicAds
18 Jul: MAGAS7
19 Jul: DragonList
20 Jul: DocAI

Each following media caption contains the exact paste-ready X post. Please keep the date order and the EARLY ACCESS, BETA, consent, and educational-safety language.

MC5Y-20260714-INTRO""",
}


ITEMS = [
    {
        "marker": "MC5Y-20260714-D01",
        "media": "magiccraft-five-years-01-game.png",
        "message": """Day 1/7 • 14 July 2026
MagicCraft Game

X post:
Day 1/7: From the 2021 build story to a live cross-platform game. MagicCraft is free-to-play PvP and PvE on mobile and PC, with optional Web3 kept separate. Play: https://magiccraft.io/magiccraft

Suggested post time: 18:00 ICT
MC5Y-20260714-D01""",
    },
    {
        "marker": "MC5Y-20260714-D02",
        "media": "magiccraft-five-years-02-merlin.png",
        "message": """Day 2/7 • 15 July 2026
Merlin AI

X post:
Day 2/7: Merlin is a multi-persona AI assistant for chat, images, voice, translation, market briefs and memory. Connected accounts and messaging remain permission-based. Meet Merlin: https://merlintheai.com/

Suggested post time: 18:00 ICT
MC5Y-20260714-D02""",
    },
    {
        "marker": "MC5Y-20260714-D03",
        "media": "magiccraft-five-years-03-akyn.png",
        "message": """Day 3/7 • 16 July 2026
Akyn

X post:
Day 3/7: Akyn brings an AI film workflow into one studio: ideas, reusable characters and locations, generated scenes, editing and final video. Explore Akyn: https://akyn.pro/

Suggested post time: 18:00 ICT
MC5Y-20260714-D03""",
    },
    {
        "marker": "MC5Y-20260714-D04",
        "media": "magiccraft-five-years-04-magicads.png",
        "message": """Day 4/7 • 17 July 2026
MagicAds

X post:
Day 4/7: MagicAds is an agent-native advertising network. Create campaigns or connect publisher inventory through a dashboard, lightweight script or API. Explore: https://magicads.dev/

Suggested post time: 18:00 ICT
MC5Y-20260714-D04""",
    },
    {
        "marker": "MC5Y-20260714-D05",
        "media": "magiccraft-five-years-05-magas7.png",
        "message": """Day 5/7 • 18 July 2026
MAGAS7 • EARLY ACCESS

X post:
Day 5/7: MAGAS7 puts seven specialist marketing agents on one command surface for research, writing, design, scheduling, posting, analytics and brand QA. Join early access: https://magas7.com/

Suggested post time: 18:00 ICT
MC5Y-20260714-D05""",
    },
    {
        "marker": "MC5Y-20260714-D06",
        "media": "magiccraft-five-years-06-dragonlist.png",
        "message": """Day 6/7 • 19 July 2026
DragonList • BETA

X post:
Day 6/7: DragonList turns meetings into transcripts, summaries, assigned tasks and trackable follow-up. It is in beta; record only with participant notice and consent. https://dragonlist.ai/

Suggested post time: 18:00 ICT
MC5Y-20260714-D06""",
    },
    {
        "marker": "MC5Y-20260714-D07",
        "media": "magiccraft-five-years-07-docai.png",
        "message": """Day 7/7 • 20 July 2026
DocAI • EDUCATIONAL

X post:
Day 7/7: DocAI helps organize symptoms, reports, medications and wellness questions so people can prepare better next steps. Educational guidance only, not diagnosis or emergency care. https://docai.live/

Suggested post time: 18:00 ICT
MC5Y-20260714-D07""",
    },
]


def archive_entry(marker: str) -> dict[str, Any] | None:
    if not ARCHIVE.exists():
        return None

    match = None
    with ARCHIVE.open("r", encoding="utf-8") as handle:
        for line in handle:
            if marker not in line:
                continue
            try:
                row = json.loads(line)
            except json.JSONDecodeError:
                continue
            if row.get("groupId") == GROUP_ID and marker in str(row.get("body", "")):
                match = row
    return match


def find_message_id(value: Any) -> str | None:
    if isinstance(value, dict):
        for key in ("messageId", "message_id"):
            candidate = value.get(key)
            if isinstance(candidate, str) and candidate:
                return candidate
        for nested in value.values():
            candidate = find_message_id(nested)
            if candidate:
                return candidate
    if isinstance(value, list):
        for nested in value:
            candidate = find_message_id(nested)
            if candidate:
                return candidate
    return None


def parse_cli_json(stdout: str) -> dict[str, Any] | None:
    candidates = [stdout.strip(), *reversed(stdout.splitlines())]
    for candidate in candidates:
        if not candidate:
            continue
        try:
            parsed = json.loads(candidate)
        except json.JSONDecodeError:
            continue
        if isinstance(parsed, dict):
            return parsed
    return None


def append_ledger(payload: dict[str, Any]) -> None:
    payload = {
        "recordedAt": datetime.now(timezone.utc).isoformat(),
        **payload,
    }
    with LEDGER.open("a", encoding="utf-8") as handle:
        handle.write(json.dumps(payload, ensure_ascii=False) + "\n")


def wait_for_archive(marker: str, timeout_seconds: int = 45) -> dict[str, Any] | None:
    deadline = time.time() + timeout_seconds
    while time.time() < deadline:
        row = archive_entry(marker)
        if row:
            return row
        time.sleep(1)
    return None


def validate_item(item: dict[str, Any]) -> None:
    marker = item["marker"]
    if marker not in item["message"]:
        raise RuntimeError(f"Marker missing from message: {marker}")
    media = item.get("media")
    if media:
        path = MEDIA_DIR / media
        if not path.is_file() or path.stat().st_size < 500_000:
            raise RuntimeError(f"Invalid media file: {path}")


def send_item(item: dict[str, Any]) -> dict[str, Any]:
    marker = item["marker"]
    existing = archive_entry(marker)
    if existing:
        result = {
            "marker": marker,
            "status": "skipped_existing",
            "messageId": existing.get("messageId"),
            "media": item.get("media"),
        }
        append_ledger(result)
        return result

    command = [
        "sudo",
        "-H",
        "-u",
        "james",
        "merlin",
        "message",
        "send",
        "--channel",
        "whatsapp",
        "--target",
        TARGET,
        "--message",
        item["message"],
    ]
    if item.get("media"):
        command.extend(["--media", str(MEDIA_DIR / item["media"])])
    command.append("--json")

    completed = subprocess.run(
        command,
        capture_output=True,
        text=True,
        timeout=120,
        check=False,
    )

    archived = wait_for_archive(marker, 45)
    if completed.returncode != 0 and not archived:
        append_ledger(
            {
                "marker": marker,
                "status": "failed",
                "returncode": completed.returncode,
                "stderr": completed.stderr[-500:],
                "media": item.get("media"),
            }
        )
        raise RuntimeError(
            f"Send failed without archive proof for {marker}: "
            f"{completed.stderr[-300:]}"
        )
    if not archived:
        append_ledger(
            {
                "marker": marker,
                "status": "uncertain_no_archive",
                "returncode": completed.returncode,
                "media": item.get("media"),
            }
        )
        raise RuntimeError(f"No archive proof for {marker}; stopping without retry")

    cli_json = parse_cli_json(completed.stdout)
    cli_message_id = find_message_id(cli_json) if cli_json else None
    archive_message_id = archived.get("messageId")
    if cli_message_id and archive_message_id and cli_message_id != archive_message_id:
        raise RuntimeError(
            f"Message ID mismatch for {marker}: CLI={cli_message_id} "
            f"archive={archive_message_id}"
        )

    result = {
        "marker": marker,
        "status": "archive_verified",
        "messageId": archive_message_id or cli_message_id,
        "media": item.get("media"),
        "returncode": completed.returncode,
    }
    append_ledger(result)
    return result


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--live",
        action="store_true",
        help="Send the intro and seven media messages after duplicate checks.",
    )
    args = parser.parse_args()

    campaign_items = [INTRO, *ITEMS]
    for item in campaign_items:
        validate_item(item)

    existing = [item["marker"] for item in campaign_items if archive_entry(item["marker"])]
    print(
        json.dumps(
            {
                "target": TARGET,
                "items": len(campaign_items),
                "existingMarkers": existing,
                "mediaDir": str(MEDIA_DIR),
                "live": args.live,
            },
            indent=2,
        )
    )
    if not args.live:
        return 0

    results = []
    for item in campaign_items:
        result = send_item(item)
        results.append(result)
        print(json.dumps(result, ensure_ascii=False), flush=True)

    verified = [item for item in campaign_items if archive_entry(item["marker"])]
    if len(verified) != len(campaign_items):
        raise RuntimeError(
            f"Final archive verification failed: {len(verified)}/{len(campaign_items)}"
        )
    print(json.dumps({"status": "complete", "verified": len(verified)}))
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise
